import styled from 'styled-components';

import MuiList from '@material-ui/core/List';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import MuiListItemText from '@material-ui/core/ListItemText';

const List = styled(MuiList)`
  .MuiListItem-root {
    padding: 0;
  }
`;

const ListItemIcon = styled(MuiListItemIcon)`
  min-width: 14px;
  min-height: 14px;
  margin-right: 5px;

  > svg {
    width: 14px;
    height: 14px;
  }
`;

const ListItemText = styled(MuiListItemText)`
  margin: 0;
`;

export { List, ListItemIcon, ListItemText };
