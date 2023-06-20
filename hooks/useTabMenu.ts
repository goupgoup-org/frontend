import { useState } from "react";

interface Tab {
  id: number;
  label: string;
  url: string;
}

interface UseTabMenuProps {
  initialTabId?: number;
  tabs: Tab[];
}

interface UseTabMenuResult {
  activeTab: Tab | undefined;
  setActiveTabId: (tabId: number) => void;
}

const useTabMenu = ({
  initialTabId,
  tabs,
}: UseTabMenuProps): UseTabMenuResult => {
  const [activeTabId, setActiveTabId] = useState(initialTabId);

  const activeTab = tabs.find((tab) => tab?.id === activeTabId);

  return { activeTab, setActiveTabId };
};

export default useTabMenu;
