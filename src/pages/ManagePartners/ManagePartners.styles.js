import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header2: {
    marginTop: 50,
    marginBottom: 20,
  },
  statusesContainer: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  buttonStatus: {
    height: 200,
    width: 190,
  },
  buttonStatusTexts: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 200,
    width: 190,
  },
  statusHeader: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  statusValue: {
    fontSize: 30,
  },
  statusAmount: {
    fontSize: 25,
  },
  statusPercent: {
    marginTop: 10,
    marginBottom: 30,
  },
  paidContainer: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: 700,
  },
  paidOuts: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
    width: 190,
    marginBottom: 30,
  },
  export: {
    width: 'calc(100% / 9 * 3)',
    display: 'flex',
  },
  totalTable: {
    display: 'flex',
    width: 'calc(100% / 9 * 6)'
  },
  tableCell: {
    border: '1px solid #000',
    width: 'calc(100% / 6)',
    padding: 5,
  },
  boldText: {
    fontWidth: '600 !important',
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    margin: 5,
    width: '100%',
  },
  selectRoot: {
    width: 176,
    padding: '11px 15px',
    textAlign: 'left',
  },
  multiline: {
    width: 223,
  },
  inputColor: {
    color: 'red',
  },
  inputWidth: {
    width: 150,
    marginRight: 5,
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
  },
  searchBarLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    marginRight: 50,
  },
  exportButton: {
    display: 'flex',
    marginTop: 50,
  },
  exportButtonIcon: {
    width: 20,
  },
}));

export const customStyles = {
  rows: {
    style: {
      fontSize: '18px',
      cursor: 'pointer',
    },
  },
  headCells: {
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      backgroundColor: '#36868F',
      color: '#fff',
    },
    activeSortStyle: {
      color: '#fff',
      '&:focus': {
        outline: 'none',
      },
      '&:hover:not(:focus)': {
        color: '#fff',
      },
    },
    inactiveSortStyle: {
      '&:focus': {
        outline: 'none',
        color: '#fff',
      },
      '&:hover': {
        color: '#fff',
      },
    },
  },
};
