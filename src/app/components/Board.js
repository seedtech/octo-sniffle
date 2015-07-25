var React = require('react-native');
var _ = require('lodash');

var {
    View,
    StyleSheet
} = React;

var Dimensions = require('Dimensions');
var Tile = require('./Tile');

var Layout = require('../styles/Layout');

var Board = React.createClass({
    // propTypes:{
    //
    // },
    getInitialState: function() {
        return {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        };
    },
    _createRow: function(noOfCols, tileHeight, tileWidth) {

        var rowArray = [];

        for (var i = 0; i < noOfCols; i++) {
            var tile = (
                <Tile width={tileWidth} height={tileHeight} colour={'#404040'} />
            )
            rowArray.push(tile);
        };

        return rowArray;


    },
    _createCol: function(noOfRows, noOfCols, tileHeight, tileWidth) {

        var columnArray = [];

        for (var i = 0; i < noOfRows; i++) {

            var tiles = this._createRow(noOfCols, tileHeight, tileWidth);

            var row = (
                <View style={Layout.flexRow}>
                    {tiles}
                </View>
            )
            columnArray.push(row);
        };

        return columnArray;

    },
    _createTiles: function(noOfTiles) {

        console.log(noOfTiles);

        var noOfRows = noOfTiles / 2;
        var noOfCols = Math.floor(noOfTiles / noOfRows);

        var tileWidth = this.state.width / noOfCols;
        var tileHeight = this.state.height / noOfRows;

        var columns = this._createCol(noOfRows, noOfCols, tileHeight, tileWidth);

        return columns;

    },
    render: function() {



        var tiles = this._createTiles(8);
        console.log(tiles);

        var backgroundColor = '#000000';

        return (
            <View style={[Layout.flexCol, {width: this.state.width, height: this.state.height, backgroundColor: backgroundColor} ]}>
                {tiles}
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000'
    }

});
module.exports = Board;