import DataTable, { createTheme } from 'react-data-table-component';
import { useTheme } from '../../contexts/ThemeProvider';

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Year',
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
];

createTheme('dark', {
  background: {
    default: 'transparent/10%',
  },
});
createTheme('light', {
  background: {
    default: 'transparent/10%',
  },
});

function User() {
  const { theme } = useTheme();
  return <DataTable columns={columns} data={data} theme={theme} />;
}

export default User;
