<?php

/**
 *	Get data from ../data/data.php and use it to create
 *	and set data in the database
 */

require_once(dirname(__DIR__) . '/data/data.php');

class Table {
	
	private $data = '';

	function __construct() {
		
		$this->setData();
	}

	public function log($var) {
		
		ob_start();
		print_r($var);
		$output = ob_get_clean();

		file_put_contents('./info.log', $output, FILE_APPEND);
	}

	private function setData() {
		
		// data from external data file for database	
		global $data;

		// Set this object's data property to $data which is set in the data.php
		// file included at the top of the file.
		$this->data = $data;

		$this->log($this->data);
	}

	private function createDbTable() {
		$sql = 'CREATE TABLE currency_rates(
			id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

		)';	
	}
}

$table = new Table;

