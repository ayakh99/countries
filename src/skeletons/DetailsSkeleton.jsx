import { Grid, Skeleton } from '@mui/material';

const DetailsSkeleton = () => {
  return (
    <>
      <Skeleton variant="text" className="details__name" width="50%" />
      <Grid container className="details__list">
        <Grid item flex={1} className="details__sublist">
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Grid>
      </Grid>
      <Skeleton variant="rounded" height="10rem" />
    </>
  );
};

export default DetailsSkeleton;
