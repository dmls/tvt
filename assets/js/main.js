/**
 * In a production environment the methods below for table creation and
 * data manipulation could go into their own class for easier code organization
 * and re-use. However since this page only does one thing and has one widget
 * that process was forgone.
 */

$(document).ready( function() {

	function createTable() {
		var tableHtml = '\
			<table>\
				<thead>\
					<tr></tr>\
				</thead>\
				\
				<tbody>\
				</tbody>\
			</table>\
		';

		window.currencyTable.append(tableHtml);
	}

	function setTableHead(data) {
		var headRow = window.currencyTable.find('thead tr');

		// Add column that doesn't have a name in the data
		headRow.append('<td>Country</td>');

		for (key in data[0]['value'])
		{
			headRow.append('<td>' + key + '</td>');
		}

	}

	function setTableContent(data) {
		var tBody = window.currencyTable.find('tbody');

		for (var i = 0; i < data.length; ++i)
		{
			var html = '<tr>';
			html = html + '<td><span class="mobileLabel">Country</span>' + data[i]['country'] + '</td>';

			for (key in data[i]['value'])
			{
				var value = data[i]['value'][key];
				html = html + '<td><span class="mobileLabel">' + key + '</span>' + value + '</td>';
			}

			var html = html + '</tr>';
			tBody.append(html);
		}
	}

	/**
	 * In production function would be more roboust to handle other sort types than just 
	 * 15m ascending or descending
	 */
	function sortData(data, sort) {
		if (sort == 'asc')
		{
			data.sort(function(a,b) { return parseFloat(a['value']['15m']) - parseFloat(b['value']['15m']) } );
		}

		if (sort == 'desc')
		{
			data.sort(function(a,b) { return parseFloat(b['value']['15m']) - parseFloat(a['value']['15m']) } );
		}
		
		return data;
	}

	/**
	 * Take data object of objects and convert it to an array
	 */
	function tableDataToArray(data) {
		
		var newDataArray = [];

		// convert array objects to arrays
		for (key in data)
		{
			var newData = {
				'country': key,
				'value': data[key]
			};

			newDataArray.push(newData);
		}

		return newDataArray;
		
	}

	/**
	 * If currency table exists then the following functions and code that create and handle
	 * the data will run.
	 */
	if ($('.currencyTable').length > 0)
	{
		window.currencyTable = $('.currencyTable');

		// get table data
		var tableData = JSON.parse(window.currencyTable.attr('data-info'));

		// convert object of objects into array of objects for easier data manipulation
		var data = tableDataToArray(tableData);

		// create table
		createTable();

		// set table head
		setTableHead(data);
		
		// set table content
		setTableContent(data);

		// update table contents on click of sort
		$('.currencyTable-sorter select').on('change', function() {
			// get type of sort chosen
			var sort = this.value;

			// pass data and sort choice to sort data function
			var sortedData = sortData(data, sort);	

			// clear current table data
			var tBody = window.currencyTable.find('tbody');
			tBody.html('');

			// pass sorted data to setTableContent function
			setTableContent(data);	
		});
	}

	
});

