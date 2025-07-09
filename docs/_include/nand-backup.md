1. Press (Home) to bring up the action menu
1. Select "Scripts..."
1. Select "GM9Megascript"
1. Select "Backup Options"
1. Select "SysNAND Backup"
1. Press (A) to confirm
    + This process will take some time
    + If you get an error, look for your issue in the [troubleshooting guide](troubleshooting-finalizing-setup.html)
1. Press (A) to continue
1. Press (B) to return to the main menu
1. Select "Exit"
1. Press (A) to relock write permissions if prompted
1. Navigate to `[S:] SYSNAND VIRTUAL`
1. Press (A) on `essential.exefs` to select it
1. Select "Copy to 0:/gm9/out"
    + If you see "Destination already exists", press (A) on "Overwrite file(s)"
1. Press (A) to continue
1. Hold (R) and press (Start) at the same time to power off your console
1. Insert your SD card into your computer
1. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    + Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    + These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
1. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    + The other backup files are negligible in size and may be kept on your SD card for ease of access
1. Reinsert your SD card into your console
