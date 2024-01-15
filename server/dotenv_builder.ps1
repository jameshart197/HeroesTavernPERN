$vars = ls -r src | Select-String process.env. |  Select line |  foreach { $_ -replace '.+process.env.(\w+).+','$1' } | Select-Object -Unique | sort-object 

$outfile = "" 

foreach ($var in $vars){
    $value = read-host "Please input the value for $var"
    $Outfile += "$var = $value`n"

}
#$Outfile

$Outfile | new-item .env -Force