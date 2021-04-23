import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./ManagePartners.styles";

export default function SearchBar({ search, setSearch }) {
  const classes = useStyles();

  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  if (!search) return <div />;

  return (
    <div className={classes.searchBar}>
      <label className={classes.searchBarLabel}>
        Partner Name
        <Select
          variant="outlined"
          value={search.partner}
          onChange={handleSearch}
          name="partner"
          classes={{ root: classes.selectRoot }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Partner 1">Partner 1</MenuItem>
          <MenuItem value="Partner 2">Partner 2</MenuItem>
          <MenuItem value="Partner 3">Partner 3</MenuItem>
        </Select>
      </label>
      <label className={classes.searchBarLabel}>
        Language
        <TextField
          variant="outlined"
          value={search.language}
          onChange={handleSearch}
          name="language"
          size="small"
          type="search"
        />
      </label>
      <label className={classes.searchBarLabel}>
        Mobile Number
        <TextField
          variant="outlined"
          value={search.phone}
          onChange={handleSearch}
          name="phone"
          size="small"
          type="search"
        />
      </label>
    </div>
  );
}
