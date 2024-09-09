<?php
$todolist = file_get_contents('./data/todo-list.json');

header('content-type: application/json');
echo json_encode($todolist);
