import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import { useLoading } from '../../context/LoadingContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Ploddings() {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
}

