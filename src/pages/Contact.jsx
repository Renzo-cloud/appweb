import React from "react";
import { Descriptions } from "antd";


const Contact = () => <Descriptions title="User Info" bordered items={items} />;
const items = [
  {
    key: "1",
    label: "Main Office",
    children:
      "Unit 1206 12th The Trade & Financial Tower, 7th & 32 Ave. Bonifacio Global City, Taguig City, Philippines 1634",
  },
  {
    key: "2",
    label: "Email",
    children: "info@dynamicglobalsoft.com sales@dynamicglobalsoft.com",
  },
  {
    key: "3",
    label: "Satellite Office",
    children:
      "DG Santiago Bldg. B1 L5 Suburban Drive, Bgry. San Isidro, Taytay, Rizal 1920",
  },
  {
    key: "4",
    label: "Phone",
    children: "0917-987-1468 | 02-82538279 | 0928-524-8720",
  },
];

export default Contact;
