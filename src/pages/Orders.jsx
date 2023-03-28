import React from "react";
import {
  Inject,
  Page,
  Edit,
  Sort,
  Resize,
  Filter,
  ContextMenu,
  PdfExport,
  ExcelExport,
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";
import {
  ordersData,
  contextMenuItem,
  contextGrid,
  ordersGrid,
} from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Edit,
            Sort,
            Resize,
            Filter,
            ContextMenu,
            PdfExport,
            ExcelExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
