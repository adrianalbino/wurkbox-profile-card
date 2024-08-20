const PropertiesJobTable = () => {
  return (
    <>
      <div className="properties-job-table half-big-font">
        <table>
          <thead>
            <tr>
              <th>Job #</th>
              <th>Booking date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Priority</th>
              <th>Amount</th>
              <th>Paid</th>
              <th>Balance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#461366</td>
              <td>12-10-2024</td>
              <td>
                Neque Porro Quisquam Est, Qui Dolorem Ipsum Quia Dolor Sit Amet,
                Consectetur, Adipisci Velit, Sed Qu <p className="read-more">... Read More</p>
              </td>
              <td>Other - Plumbing</td>
              <td>Callback</td>
              <td>$500.00</td>
              <td>$500.00</td>
              <td>$0.00</td>
              <td>Canceled</td>
            </tr>
            <tr>
              <td>#461321</td>
              <td>12-10-2024</td>
              <td>
                Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit
                Aut Fugit, Sed Quia Consequuntur Ma <p className="read-more">... Read More</p>
              </td>
              <td>Other - Plumbing</td>
              <td>Other - Plumbing</td>
              <td>$500.00</td>
              <td>$200.00</td>
              <td className="red-text">$300.00</td>
              <td className="green-text">Completed</td>
            </tr>
            <tr>
              <td>#461735</td>
              <td>12-10-2024</td>
              <td>
                Quis Autem Vel Eum Iure Reprehenderit Qui In Ea Voluptate Velit
                Esse Quam Nihil Molestiae Consequatu <p className="read-more">... Read More</p>
              </td>
              <td>Hot Water Service</td>
              <td>Hot Water Service</td>
              <td>$500.00</td>
              <td>$500.00</td>
              <td>$0.00</td>
              <td className="green-text">Completed</td>
            </tr>
            <tr>
              <td>#461378</td>
              <td>12-10-2024</td>
              <td>
                Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                Accusantium Doloremque Laudantium, To <p className="read-more">... Read More</p>
              </td>
              <td>Blocked Drain</td>
              <td>Blocked Drain</td>
              <td>$500.00</td>
              <td>$500.00</td>
              <td>$0.00</td>
              <td className="orange-text">Ongoing</td>
            </tr>
            <tr>
              <td>#461378</td>
              <td>12-10-2024</td>
              <td>
                Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                Accusantium Doloremque Laudantium, To <p className="read-more">... Read More</p>
              </td>
              <td>Blocked Drain</td>
              <td>Blocked Drain</td>
              <td>$500.00</td>
              <td>$500.00</td>
              <td>$0.00</td>
              <td className="orange-text">Ongoing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PropertiesJobTable
