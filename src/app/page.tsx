'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function HomePage() {
  const router = useRouter();
  const { data: session } = useSession();

  const features = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Quantum-Enhanced AI',
      description: 'Advanced quantum computing algorithms detect complex medical patterns that traditional systems miss.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Rapid Diagnosis',
      description: 'Get accurate disease predictions in seconds with our cutting-edge hybrid AI technology.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 50, color: 'success.main' }} />,
      title: 'Personalized Insights',
      description: 'Receive tailored health recommendations based on your unique symptom profile and medical history.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 50, color: 'info.main' }} />,
      title: 'HIPAA & GDPR Compliant',
      description: 'Your health data is encrypted and secured with industry-leading privacy standards.',
    },
  ];

  const steps = [
    { number: '01', title: 'Describe Symptoms', description: 'Enter your health concerns through our intuitive interface' },
    { number: '02', title: 'AI Analysis', description: 'Quantum AI processes your data with unprecedented accuracy' },
    { number: '03', title: 'Get Results', description: 'Receive detailed diagnosis with confidence scores and recommendations' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip
                  label="Quantum AI Technology"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    mb: 2,
                    fontWeight: 600,
                  }}
                />
                <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
                  InsightCare
                </Typography>
                <Typography variant="h5" sx={{ mb: 3, opacity: 0.95 }}>
                  Next-Generation Healthcare Diagnosis Platform
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.9 }}>
                  Harnessing the power of quantum-enhanced AI to deliver highly accurate, personalized disease diagnosis. Experience the future of healthcare today.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => router.push(session ? '/symptoms' : '/login')}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    {session ? 'Get Started' : 'Sign In'}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <LocalHospitalIcon sx={{ fontSize: { xs: 150, md: 250 }, opacity: 0.9 }} />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight={700}>
            Powered by Quantum Intelligence
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Our hybrid quantum-classical AI analyzes complex medical patterns for unprecedented diagnostic accuracy
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box mb={2}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom fontWeight={700}>
              How It Works
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Get your personalized diagnosis in three simple steps
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  textAlign="center"
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      opacity: 0.2,
                      mb: 2,
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Trust Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Card
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
          }}
        >
          <VerifiedUserIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" gutterBottom fontWeight={700}>
            Your Privacy is Our Priority
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
            InsightCare adheres to the highest standards of data security and privacy compliance, including HIPAA and GDPR regulations. Your medical information is encrypted end-to-end and never shared without your explicit consent.
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
            <Chip icon={<CheckCircleIcon />} label="HIPAA Compliant" sx={{ bgcolor: 'white', color: 'primary.main' }} />
            <Chip icon={<CheckCircleIcon />} label="GDPR Certified" sx={{ bgcolor: 'white', color: 'primary.main' }} />
            <Chip icon={<CheckCircleIcon />} label="End-to-End Encrypted" sx={{ bgcolor: 'white', color: 'primary.main' }} />
          </Stack>
        </Card>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom fontWeight={700}>
              Ready to Experience Quantum-Powered Diagnosis?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Join thousands of users leveraging cutting-edge AI for better health insights
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push(session ? '/symptoms' : '/login')}
              sx={{ px: 6, py: 2, fontSize: '1.1rem' }}
              endIcon={<ArrowForwardIcon />}
            >
              {session ? 'Start Analysis' : 'Get Started Free'}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
