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
    width: '90%',
  },
  labelMultiline: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    margin: 5,
    width: '104%',
  },
  selectRoot: {
    width: 100,
    padding: '11px 15px',
    textAlign: 'left',
  },
  smallInput: {
    width: 140,
  },
  multiline: {
    width: 300,
  },
  inputColor: {
    color: 'red',
  },
  inputWidth: {
    width: 150,
    marginRight: 5,
  },
  searchBar: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid #36868F',
    borderRadius: 10,
    padding: 7,
    width: 'fit-content',
  },
  searchBarTable: {
    display: 'flex',
    alignItems: 'center',
  },
  searchBarLabel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  searchBarLabelAgeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    top: 30,
  },
  searchBarLabelAge: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',   
    width: 180,
    marginBottom: 10,
  },
  inputAge: {
    width: 140,
  },
  searchBarInput: {
    marginTop: 10,
  },
  exportButton: {
    display: 'flex',
    marginTop: 50,
  },
  exportButtonIcon: {
    width: 20,
  },
  modalTopRow: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  modalTopColLeft: {
    width: '60%',
  },
  modalTopColRight: {
    width: '40%',
  },
  TableCellHeader: {
    background: '#36868F',
    border: '3px solid #fff',
    color: '#fff',
  },
  TableCellNoBorder: {
    border: 0
  },
  tableFooter: {
    display: 'flex !important',
    justifyContent: 'flex-end',
  },
  containedPercent: {
    padding: '1px 15px',
    border: '1px solid',
    marginLeft: 10,
  },
  manageButton: {
    margin: 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
}));

export const customStyles = {
  header: {
    style: {
      fontSize: '26px',
      color: '#3E4177',
      textAlign: "left",
    },
  },
  rows: {
    style: {
      fontSize: '18px',
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
