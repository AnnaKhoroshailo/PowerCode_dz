import React, {useState} from 'react';
import { Layout, Button } from 'element-react';
import CheckboxCheckAll from '../../components/Base/CheckboxCheckAll';
import ProgressBase from '../../components/Base/Progress';

function ElementsUi() {
  const [elementsCount, setElementsCount]=useState(4); 
  return (
    <div>
      <h1>Здесь {elementsCount} элемента(-ов)</h1>
      <Layout.Row>
        <Layout.Col span="10">
          <div className="grid-content">
            <CheckboxCheckAll defaultValue={false} />
          </div>
        </Layout.Col>
        <Layout.Col span="10">
          <div className="grid-content">
            <CheckboxCheckAll defaultValue={true} />
          </div>
        </Layout.Col>
        <Layout.Col span="4">
          <div className="grid-content">
            <ProgressBase value={50} />
            <ProgressBase value={40} />
          </div>
        </Layout.Col>
      </Layout.Row>
      <br/>
      <Button type="primary" onClick={() => setElementsCount(elementsCount + 1)}>+1 element</Button>
    </div>
  );
}

export default ElementsUi;

