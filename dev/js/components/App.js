import React from 'react';
import PrjList from '../containers/prj-list';
import PrjDetails from '../containers/prj-detail';
import PrjHeaders from '../containers/prj-headers';

require('../../scss/style.scss');

const App = () => (
    <div>
        <PrjHeaders />
        <PrjList />
        <PrjDetails />
    </div>
);

export default App;
