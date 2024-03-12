import { create } from 'zustand'
import { Light } from './themes'

const useThemeStore = create((set, get) => ({
        theme: 'light',
        themeStyle: Light
  }))