import {NodeData} from '@/components/node-table'
import { create } from 'zustand'


export const useStore = create((set)=> ({

    nodes: [],
    updateNode: () =>{}


}))