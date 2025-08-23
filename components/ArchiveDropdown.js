"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";
import styles from "../styles/ArchiveDropdown.module.css"; // ✅ renamed

const monthNames = [
  "january","february","march","april","may","june",
  "july","august","september","october","november","december"
];

export default function ArchiveDropdown() {
  const [archives, setArchives] = useState([]);
  const [openYears, setOpenYears] = useState({});

  useEffect(() => {
    const fetchArchives = async () => {
      const { data, error } = await supabase
        .from("content")
        .select("date")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching archive dates:", error);
        return;
      }

      const grouped = {};
      data.forEach(({ date }) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const monthName = monthNames[d.getMonth()]; // always lowercase

        if (!grouped[year]) {
          grouped[year] = { count: 0, months: {} };
        }
        grouped[year].count += 1;
        grouped[year].months[monthName] =
          (grouped[year].months[monthName] || 0) + 1;
      });

      const archiveArray = Object.entries(grouped)
        .map(([year, { count, months }]) => ({
          year,
          count,
          months: Object.keys(months)
            .map((m) => ({ month: m, count: months[m] }))
            .sort(
              (a, b) =>
                monthNames.indexOf(a.month) - monthNames.indexOf(b.month)
            ),
        }))
        .sort((a, b) => b.year - a.year);

      setArchives(archiveArray);
    };

    fetchArchives();
  }, []);

  const toggleYear = (year) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
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
                {months.map(({ month, count }) => (
                  <li key={month}>
                    <Link href={`/archive/${year}/${month}`}>
                      {month.charAt(0).toUpperCase() + month.slice(1)} ({count})
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

