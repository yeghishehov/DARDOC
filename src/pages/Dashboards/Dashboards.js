import { useMemo, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles, { customStyles } from './Dashboards.styles';

const statuses = [
  { name: 'Bookings', color: '#fff', value: 1920, amount: 611000 },
  { name: 'New', color: '#D9D9D9', value: 125, amount: 47050 },
  { name: 'Accepted', color: '#36868F', value: 125, amount: 42450 },
  { name: 'Processing', color: '#DAF2F4', value: 190, amount: 60200 },
  { name: 'Reported', color: '#49B3B1', value: 1472, amount: 459310 },
  { name: 'Rejected', color: '#BC2C25', value: 8, amount: 1990 },
];

const paidOuts = [
  { name: 'Total Paid to Partners', color: '#57BBBD', amount: 370000 },
  { name: 'Total Payable to Partners', color: '#F3B086', amount: 167500 },
  { name: 'Total DarDoc Commission', color: '#38858D', amount: 79500 },
];

const columnOptionData = ['Lab Name', 'Coverage City', 'Service Type', 'Total Bookings', 'Total New', 'Total Accepted', 'Total Processing', 'Total Reported', 'Total Rejected'];

const data = [
  {
    id: 0,
    [columnOptionData[0]]: 'Lab Care',
    [columnOptionData[1]]: 'Sharjah, Dubai',
    [columnOptionData[2]]: 'Covid19 RT PCR Test',
    [columnOptionData[3]]: "500 AED111000",
    [columnOptionData[4]]: '20 AED4400',
    [columnOptionData[5]]: '30 AED85800',
    [columnOptionData[6]]: '55 AED12100',
    [columnOptionData[7]]: '390 AED85800',
    [columnOptionData[8]]: '5 AED1100',
  },
  {
    id: 1,
    [columnOptionData[0]]: 'Lab Care',
    [columnOptionData[1]]: 'Sharjah, Dubai',
    [columnOptionData[2]]: 'Covid19 RT PCR Test',
    [columnOptionData[3]]: "500 AED111000",
    [columnOptionData[4]]: '20 AED4400',
    [columnOptionData[5]]: '30 AED85800',
    [columnOptionData[6]]: '55 AED12100',
    [columnOptionData[7]]: '390 AED85800',
    [columnOptionData[8]]: '5 AED1100',
  },
  {
    id: 2,
    [columnOptionData[0]]: 'Lab Care',
    [columnOptionData[1]]: 'Sharjah, Dubai',
    [columnOptionData[2]]: 'Covid19 RT PCR Test',
    [columnOptionData[3]]: "500 AED111000",
    [columnOptionData[4]]: '20 AED4400',
    [columnOptionData[5]]: '30 AED85800',
    [columnOptionData[6]]: '55 AED12100',
    [columnOptionData[7]]: '390 AED85800',
    [columnOptionData[8]]: '5 AED1100',
  },
  {
    id: 4,
    [columnOptionData[0]]: 'Lab Care',
    [columnOptionData[1]]: 'Sharjah, Dubai',
    [columnOptionData[2]]: 'Covid19 RT PCR Test',
    [columnOptionData[3]]: "500 AED111000",
    [columnOptionData[4]]: '20 AED4400',
    [columnOptionData[5]]: '30 AED85800',
    [columnOptionData[6]]: '55 AED12100',
    [columnOptionData[7]]: '390 AED85800',
    [columnOptionData[8]]: '5 AED1100',
  },
];

export default function Dashboards() {
  const classes = useStyles();

  const columns = useMemo(() => columnOptionData.map((columnOptionItem) => ({
    name: columnOptionItem,
    selector: columnOptionItem,
    sortable: true,
    wrap: true,
    cell: (dataItem) => { console.log(dataItem); return (<Typography align="left">{dataItem[columnOptionItem]}</Typography>)}
  })));

  return (
    <>
      <Typography align="left" variant="h4" className={classes.header}>Dar Lab MAIN DASHBOARDS</Typography>
      <div className={classes.statusesContainer}>
        {statuses.map(item => (
          <div>
            <Button
              key={item.name}
              variant="contained"
              style={{ backgroundColor: item.color }}
              className={classes.buttonStatus}
            >
              <div className={classes.buttonStatusTexts}>
                <Typography className={classes.statusHeader}>{`Total ${item.name}`}</Typography>
                <Typography className={classes.statusValue}>{item.value}</Typography>
                <Typography className={classes.statusAmount}>{`AED${item.amount}`}</Typography>
              </div>
            </Button>
            {item.name !== 'Bookings'
              ? (
                <Typography
                  variant="h5"
                  className={classes.statusPercent}
                >
                  {`${(item.amount / statuses[0].amount * 100).toFixed(1)}%`}
                </Typography>
              ) : null}
          </div>
        ))}
      </div>

      <div className={classes.paidContainer}>
        {paidOuts.map(item => (
          <div
            key={item.name}
            variant="contained"
            style={{ backgroundColor: item.color }}
            className={classes.paidOuts}
          >
            <Typography className={classes.statusHeader}>{`Total ${item.name}`}</Typography>
            <Typography className={classes.statusAmount}>{`AED${item.amount}`}</Typography>
          </div>
        ))}
      </div>

      <DataTable
        keyField="id"
        columns={columns}
        data={data}
        highlightOnHover
        subHeaderAlign="left"
        customStyles={customStyles}
        pagination
      />
    </>
  );
}
