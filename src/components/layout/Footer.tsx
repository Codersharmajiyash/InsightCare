'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} InsightCare. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
          <MuiLink href="/privacy" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </MuiLink>
          {' | '}
          <MuiLink href="/terms" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}
