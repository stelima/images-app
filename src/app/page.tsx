'use client';

import React, { useEffect, useState } from 'react';
import ImageList, { ImageItem } from './components/ImageList/ImageList';
import PaginationMUI from './components/ImageList/Pagination';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import styles from './page.module.css';

const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;
const IMAGES_PER_PAGE = 10;
const TOTAL_IMAGES = 50;
const TOTAL_PAGES = TOTAL_IMAGES / IMAGES_PER_PAGE;

export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (page: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos?page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`
      );
      if (!res.ok) throw new Error('Failed to fetch images');
      const data: ImageItem[] = await res.json();
      setImages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(currentPage);
  }, [currentPage]);

  return (
    <Container className={styles.container}>
      <Typography variant="h4" gutterBottom>
        Latest Images
      </Typography>

      {loading ? (
        <Box className={styles.loader}>
          <CircularProgress />
        </Box>
      ) : (
        <ImageList images={images} />
      )}

      <Box className={styles.pagination}>
        <PaginationMUI
          page={currentPage}
          totalPages={TOTAL_PAGES}
          onChange={setCurrentPage}
        />
      </Box>
    </Container>
  );
}
