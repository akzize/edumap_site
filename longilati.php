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
            <a class="navbar-brand" href="index.php">par adresse</a>
            <form class="d-flex" method="POST">
                <input class="form-control me-2" type="text" name="latitude" placeholder="Enterr la latitude" aria-label="Search">
                <input class="form-control me-2" type="text" name="longitude" placeholder="Enterr la longitude" aria-label="Search">
                <button class="btn btn-outline-success" type="submit" name="submit_coordinates">Search</button>
            </form>
        </div>
    </nav>
</body>

</html>
<?php
if (isset($_POST["submit_coordinates"])) {
    $latitude = $_POST["latitude"];
    $longitude = $_POST["longitude"];
?>
    <div class="ratio ratio-16x9">
        <iframe src="https://maps.google.com/maps?q=<?php echo $latitude; ?>,<?php echo $longitude; ?>&output=embed" allowfullscreen></iframe>
    </div>

<?php
}
?>