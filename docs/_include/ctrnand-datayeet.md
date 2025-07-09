This section will reset your system settings to its defaults. **Installed games and their save data will not be affected.** This is **required** to prevent known issues relating to extended memory mode and applets on some consoles.

::: warning

This process will reset your Mii data. If you wish to save any Miis that you have created, either [generate a QR code](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) for each Mii that you want to save, or make a backup of `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` before following these instructions. You can restore this file to the same directory *after* your console has gone through initial setup.

:::

1. Power off your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Navigate to `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    + The `<ID0>` will be a folder with a 32-character long name
1. Use the D-Pad to highlight `00010017`
1. Press (Right Shoulder) + (A) to bring up the folder options
1. Select "Copy to 0:/gm9/out"
1. Press (A) to continue
1. While still highlighting `00010017`, press (X) to delete it
1. Press (A) to confirm
1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
1. Once the file has been deleted, press (A) to continue
1. Press (A) to relock write permissions if prompted
1. Press (Start) to reboot your console
1. Your console will load into the initial setup menu
    + This is expected behaviour. You have not lost any of your game data
1. Complete the initial setup menu by following the prompts on your console's screen
