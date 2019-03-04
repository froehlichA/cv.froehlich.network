import styled from 'styled-components';

export default styled.table`
  width: 100%;
  table-layout: fixed;
  page-break-inside: auto;
  overflow-wrap: break-word;
  tbody tr {
    page-break-inside: avoid;
    page-break-after: auto;
  }
  thead tr td {
    font-weight: bold;
  }
  tbody tr td:first-child {
    width: 35%;
  }
  tbody tr td ul {
    margin-bottom: 0px;
    margin-left: 0px;
  }
  tbody tr td ul li {
    margin-bottom: 0px;
  }
  @media (max-width: 768px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tbody tr td ul {
      margin-left: 10px !important;
    }
    tbody tr td:first-child {
      font-weight: bold;
    }
    tbody tr td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      width: 100% !important;
      padding: 10px !important;
    }
  }
`;