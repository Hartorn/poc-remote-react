//import React from 'react';
import personApiDriver from '../config/server/remoteComp';
import omit from 'lodash/object/omit';

export default {
    loadComponent(name) {
        console.log(`[PERSON] call loadComponent(${name}) method`);
        return personApiDriver.load({ name }).then((srcCode) => {
            const React = require('react');
            const Component = React.Component;
            return eval(srcCode);
        });
    }
}