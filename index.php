<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>

<body>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="longilati.php">par latitude et longitude</a>
            <form class="d-flex" method="POST">
                <input class="form-control me-2" type="text" name="address" placeholder="Enterr l'addresse" aria-label="Search">
                <button class="btn btn-outline-success" type="submit" name="submit_address">Search</button>
            </form>
        </div>
    </nav>
</body>

</html>
<?php
if (isset($_POST["submit_address"])) {
    $address = $_POST["address"];
    $address = str_replace(" ", "+", $address);
?>
    <div class="ratio ratio-16x9">
        <iframe src="https://maps.google.com/maps?q=<?php echo $address; ?>&output=embed" allowfullscreen></iframe>
    </div>
    <!-- <iframe width="100%" height="500" src=""></iframe> -->

<?php
}
?>