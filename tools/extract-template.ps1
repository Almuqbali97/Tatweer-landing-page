param(
  [Parameter(Mandatory = $true)]
  [string]$BriefPath
)

$ErrorActionPreference = "Stop"
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
$brief = [System.IO.File]::ReadAllText($BriefPath, [System.Text.Encoding]::UTF8)

$componentPattern = '(?ms)^### File \d+ of 10: /(?<path>[^\r\n]+)\r?\n\r?\n(?<code>.*?)(?=^### File \d+ of 10:|^### Install Dependencies:)'
$componentMatches = [regex]::Matches($brief, $componentPattern)

if ($componentMatches.Count -ne 10) {
  throw "Expected 10 component blocks, found $($componentMatches.Count)."
}

foreach ($match in $componentMatches) {
  $relativePath = $match.Groups["path"].Value.Replace("/", [System.IO.Path]::DirectorySeparatorChar)
  $destination = Join-Path (Get-Location) $relativePath
  $directory = Split-Path -Parent $destination
  [System.IO.Directory]::CreateDirectory($directory) | Out-Null
  $code = $match.Groups["code"].Value.TrimEnd("`r", "`n")
  [System.IO.File]::WriteAllText($destination, $code + [Environment]::NewLine, $utf8NoBom)
}

$pagePattern = '(?ms)^Replace the contents of /app/page\.tsx with:\r?\n\r?\n(?<code>.*?)(?=^### Rules:)'
$pageMatch = [regex]::Match($brief, $pagePattern)

if (-not $pageMatch.Success) {
  throw "Could not find the /app/page.tsx code block."
}

$pagePath = Join-Path (Get-Location) "app\page.tsx"
[System.IO.Directory]::CreateDirectory((Split-Path -Parent $pagePath)) | Out-Null
$pageCode = $pageMatch.Groups["code"].Value.TrimEnd("`r", "`n")
[System.IO.File]::WriteAllText($pagePath, $pageCode + [Environment]::NewLine, $utf8NoBom)

Write-Output "Extracted 10 components and app/page.tsx verbatim."
