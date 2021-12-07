import Device from "./device";
import { FormattedMessage } from "react-intl";

function DeviceList(props) {
  
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"><FormattedMessage id="ID"/></th>
          <th scope="col">
          <FormattedMessage id="Device"/>
          </th>
          <th scope="col">
          <FormattedMessage id="Value"/>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.devicesList.map((d, index) => <Device key={index + 1} device={d}/>)}
      </tbody>
    </table>
  );
}

export default DeviceList;
