import React from 'react'
import { CCol, CRow } from '@coreui/react'

const Sparepart = () => {
  const purchaseOrders = [
    {
      No: 1,
      NoPR: 'PR001',
      ReqDate: '2023-10-01',
      Item: 'Mesin Pemotong',
      Qty: 2,
      Unit: 'Unit',
      Price: 5000000,
      Total: 10000000,
      Plant: 'Plant A',
      MaterialGroup: 'Mesin',
      PIC: 'John Doe',
      PO: 'PO001',
      PODate: '2023-10-02',
      Descriptions: 'Pembelian mesin pemotong untuk produksi',
      Budget: 12000000,
      NoSPB: 'SPB001',
      NoRingi: 'RNG001',
      NoAsset: 'ASSET001',
      Remark: 'Segera dikirim',
      Status: 'Dalam Proses',
      Supplier: 'PT. Mesin Jaya',
      TotalItem: 2,
      ItemReceived: 2,
      PercentReceived: 100,
      AmountRingi: 10000000,
      AmountPO: 10000000,
      GapRingi: 0,
      ArrivedAmount: 2,
      ToBeDelivery: 0,
      ToBeDeliveryProject: 'Project A',
    },
    {
      No: 2,
      NoPR: 'PR002',
      ReqDate: '2023-10-03',
      Item: 'Bahan Baku',
      Qty: 100,
      Unit: 'Kg',
      Price: 20000,
      Total: 2000000,
      Plant: 'Plant B',
      MaterialGroup: 'Bahan',
      PIC: 'Jane Smith',
      PO: 'PO002',
      PODate: '2023-10-04',
      Descriptions: 'Pembelian bahan baku untuk produksi',
      Budget: 3000000,
      NoSPB: 'SPB002',
      NoRingi: 'RNG002',
      NoAsset: 'ASSET002',
      Remark: 'Dalam pengiriman',
      Status: 'Dikirim',
      Supplier: 'PT. Bahan Baku',
      TotalItem: 100,
      ItemReceived: 80,
      PercentReceived: 80,
      AmountRingi: 1600000,
      AmountPO: 2000000,
      GapRingi: 400000,
      ArrivedAmount: 80,
      ToBeDelivery: 20,
      ToBeDeliveryProject: 'Project B',
    },
    // Add more data as needed
  ]

  const headers = [
    'No',
    'No PR',
    'Req. Date',
    'Item',
    'Qty',
    'Unit',
    'Price',
    'Total',
    'Plant',
    'Material Group',
    'PIC',
    'PO',
    'PO Date',
    'Descriptions',
    'Budget',
    'No SPB',
    'No Ringi',
    'No Asset',
    'Remark',
    'Status',
    'Supplier',
    'Total Item',
    'Item Received',
    '% Received',
    'Amount Ringi',
    'Amount PO',
    'Gap Ringi',
    'Arrived Amount',
    'To Be Delivery',
    'To Be Delivery / Project',
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <h4>Tabel Purchase Order</h4>
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-bordered">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {purchaseOrders.map((order) => (
                <tr key={order.No}>
                  {headers.map((header) => (
                    <td key={header}>{order[header.replace(/\s+/g, '')]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CCol>
    </CRow>
  )
}

export default Sparepart
