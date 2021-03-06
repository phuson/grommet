// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var path = require('path');
var __path__ = path.join(__dirname, '../../src/js/components/Map');

var GrommetTestUtils = require('../../src/utils/test/GrommetTestUtils');
var expect = require('expect');

var testData = {
  categories: [
    {id: 'first', label: 'Type1', items: [
      {id: 'a', node: 'a'},
      {id: 'b', node: 'b'}
    ]},
    {id: 'second', label: 'Type2', items: [
      {id: 'c', node: 'c'},
      {id: 'd', node: 'd'}
    ]}
  ],
  links: [
    {parentId: 'a', childId: 'c'},
    {parentId: 'a', childId: 'd'}
  ]
};

describe('Grommet Map', function() {
  it('loads a basic Map component', function() {
    var Component = GrommetTestUtils.getComponent(__path__, undefined, {
      data: testData
    });

    GrommetTestUtils.componentShouldExist(Component, 'map');

    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var slicePaths = TestUtils.scryRenderedDOMComponentsWithClass(Component,
                      'map__item');

    expect(slicePaths.length).toBe(4);
  });
});
