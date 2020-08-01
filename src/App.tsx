import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import MiniDrawerLayout from './layout/mini-drawer/MiniDrawerLayout';
import AppToolbar from './AppToolbar';
import AppNavList from './AppNavList';
import StickyHeadTable from './grid/DetailsTable';
import { Data, createData } from './model/fishData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbarSpacer: {
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // Fish json blob
  const [fish, setFishState] = React.useState<{ loading: Boolean, fish: null | Data[] }>({
    loading: false,
    fish: null,
  });

  // Fetch fish on initialization
  React.useEffect(() => {
    setFishState({ loading: true, fish: null });
    const apiUrl = `./data/fish.json`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((fishData) => {
        const fish = Object.keys(fishData).map((name: string) => {
          const fish = (fishData as unknown as { [name: string]: Data })[name];
          return createData(
            fish.name,
            fish.id,
            fish.icon_url,
            fish.price,
            fish.location,
            fish.shadow_size,
          )
        });
        setFishState({ loading: false, fish });
      });
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawerLayout
        isOpen={open}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
        toolbar={<AppToolbar />}
        navbar={<AppNavList />} />
      <main className={classes.content}>
        <div className={classes.toolbarSpacer} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <StickyHeadTable rows={fish.fish || []} />
      </main>
    </div>
  );
}
