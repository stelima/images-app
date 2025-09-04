import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationMUIProps {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
}

export default function PaginationMUI({ page, totalPages, onChange }: PaginationMUIProps) {
    return (
        <Stack spacing={2}>
            <Pagination
                count={totalPages}
                page={page}
                onChange={(event, value) => onChange(value)}
                color="primary"
                variant="outlined"
                shape="rounded"
            />
        </Stack>
    );
}
