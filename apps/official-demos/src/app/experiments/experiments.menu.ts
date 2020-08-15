import { MenuItem } from '../core/navigation/menu-item.interface';
import { MENU_ITEMS as CD_MENU_ITEMS } from './cd/cd.menu';
import { MENU_ITEMS as PUSH_MENU_ITEMS } from './push/push.menu';
import { MENU_ITEMS as LET_MENU_ITEMS } from './let/let.menu';
import { MENU_ITEMS as MIXED_MENU_ITEMS } from './mixed/mixed.menu';
import { MENU_ITEMS as PERFORMANCE_MENU_ITEMS } from './performance/performance.menu';
import { MENU_ITEMS as CD_OPERATORS_MENU_ITEMS } from './cd-operators/cd-operators.menu';
import { MENU_ITEMS as RX_STATE_MENU_ITEMS } from './state/rx-state.menu';
import { STRATEGIES_MENU } from './strategies/strategies.menu';

export const EXPERIMENTS_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Experiements',
    link: 'experiments',
    children: [
      ...CD_MENU_ITEMS,
      ...PUSH_MENU_ITEMS,
      ...LET_MENU_ITEMS,
      ...MIXED_MENU_ITEMS,
      ...PERFORMANCE_MENU_ITEMS,
      ...CD_OPERATORS_MENU_ITEMS,
      ...RX_STATE_MENU_ITEMS,
      ...STRATEGIES_MENU
    ]
  }
];
