import { Pagination, Skeleton } from '@mui/material';

type PaginatorProps = {
    currentPage?: number;
    totalPages?: number;
    isLoading?: boolean;
    setPage: (pageNumber: number) => void;
};

export const PagesRow = ({
    currentPage,
    totalPages,
    setPage,
}: PaginatorProps) => {
    // if (isSingular) {
    //   return (
    //     <Pagination
    //       count={1}
    //       color="primary"
    //       page={1}
    //       onChange={(_e, val) => setPage(val)}
    //     />
    //   );
    // }

    if (!currentPage || !totalPages)
        return (
            <Skeleton variant="rectangular">
                <Pagination count={5} />
            </Skeleton>
        );

    return (
        <Pagination
            count={totalPages}
            color="primary"
            page={currentPage}
            onChange={(_e, val) => setPage(val)}
        />
    );
};