<?php

require_once(dirname(__FILE__) . '/data/data.php');

// (for reference) Data object from required file at top of file
$data = $data;

?>

<?php require_once('inc/header.php'); ?>

<h3>TopView Data Table</h3>
<div class="data" data-info="<?php echo $data; ?>"></div>

<?php require_once('inc/footer.php');

