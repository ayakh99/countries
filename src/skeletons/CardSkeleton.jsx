import { Box, Skeleton } from '@mui/material';

const CardSkeleton = () => {
  return (
    <Box className="country__card">
      <Skeleton variant="rounded" width="100%" height={160} />
      <Box className="country__content">
        <Skeleton variant="text" className="country__name" width="65%" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Box>
    </Box>
  );
};

export default CardSkeleton;
