import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
  },
  statusesContainer: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  buttonStatus: {
    height: 150,
    width: 150,
    boxShadow: '0px 0px 20px rgba(71, 173, 195, 0.2)',
    borderRadius: 20,
    cursor: 'pointer',
  },
  buttonStatusTexts: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
    width: 150,
    // filter: 'invert(100%)',
  },
  whiteColorText: {
    color: '#fff',
  },
  statusHeader: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  statusValue: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  statusAmount: {
    fontSize: 20,
    fontWeight: 500,
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
    borderRadius: 20,
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
  paidStatusHeader: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#fff',
  },
  paidStatusAmount: {
    fontSize: 30,
    color: '#fff',
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
  subHeader: {
    style: {
      backgroundColor: '#36868F',
      padding: '0 10px',
    },
  },
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
