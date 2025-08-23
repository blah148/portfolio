"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";
import styles from "../styles/ArchiveDropdown.module.css";

const monthNames = [
  "january","february","march","april","may","june",
  "july","august","september","october","november","december"
];

export default function ArchiveDropdown() {
  const [archives, setArchives] = useState([]);
  const [openYears, setOpenYears] = useState({});
  const [openMonths, setOpenMonths] = useState({});

  useEffect(() => {
    const fetchArchives = async () => {
      const { data, error } = await supabase
        .from("content")
        .select("id, slug, title, date")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching archive data:", error);
        return;
      }

      // group into { year: { count, months: { month: { count, posts[] } } } }
      const grouped = {};
      data.forEach(({ id, slug, title, date }) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const monthName = monthNames[d.getMonth()];

        if (!grouped[year]) grouped[year] = { count: 0, months: {} };
        grouped[year].count++;

        if (!grouped[year].months[monthName]) {
          grouped[year].months[monthName] = { count: 0, posts: [] };
        }
        grouped[year].months[monthName].count++;
        grouped[year].months[monthName].posts.push({ id, slug, title });
      });

      const archiveArray = Object.entries(grouped)
        .map(([year, { count, months }]) => ({
          year,
          count,
          months: Object.entries(months)
            .map(([month, { count, posts }]) => ({
              month,
              count,
              posts,
            }))
            .sort(
              (a, b) => monthNames.indexOf(a.month) - monthNames.indexOf(b.month)
            ),
        }))
        .sort((a, b) => b.year - a.year);

      setArchives(archiveArray);
    };

    fetchArchives();
  }, []);

  const toggleYear = (year) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  const toggleMonth = (year, month) => {
    const key = `${year}-${month}`;
    setOpenMonths((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.archiveDropdown}>
      <h3 className={styles.heading}>Archive</h3>
      <ul className={styles.yearList}>
        {archives.map(({ year, count, months }) => (
          <li key={year} className={styles.yearItem}>
            <button
              className={styles.yearButton}
              onClick={() => toggleYear(year)}
            >
              {year} ({count}) {openYears[year] ? "▲" : "▼"}
            </button>
            {openYears[year] && (
              <ul className={styles.monthList}>
                {months.map(({ month, count, posts }) => {
                  const key = `${year}-${month}`;
                  return (
                    <li key={month}>
                      <button
                        className={styles.monthButton}
                        onClick={() => toggleMonth(year, month)}
                      >
                        {month.charAt(0).toUpperCase() + month.slice(1)} ({count}){" "}
                        {openMonths[key] ? "▲" : "▼"}
                      </button>
                      {openMonths[key] && (
                        <ul className={styles.postList}>
                          {posts.map((post) => (
                            <li key={post.id}>
                              <Link href={`/posts/${post.slug}`}>
                                {post.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

