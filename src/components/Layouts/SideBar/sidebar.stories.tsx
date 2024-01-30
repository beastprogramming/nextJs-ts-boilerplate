import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar, ISidebarProps } from './sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    tags: ['autodocs'],
    component: Sidebar,
};

const baseMockProps: ISidebarProps = {
    label: 'Test Label',
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const PanelSidebar: Story = {
    args: {
        ...baseMockProps,
    },
};
