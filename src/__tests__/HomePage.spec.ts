import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent } from 'vue';

// Stub heavy map components
vi.mock('@vue-leaflet/vue-leaflet', () => ({
  LMap: defineComponent({ template: '<div />' }),
  LTileLayer: defineComponent({ template: '<div />' }),
  LGeoJson: defineComponent({ template: '<div />' }),
  LMarker: defineComponent({ template: '<div />' }),
  LPopup: defineComponent({ template: '<div />' }),
}));

vi.mock('axios');
vi.mock('@oruga-ui/oruga-next', () => ({
  useOruga: () => ({ notification: { open: vi.fn() } }),
}));

import axios from 'axios';
import HomePageTs from '../HomePage';

const mockGet = vi.mocked(axios.get);

describe('HomePage', () => {
  beforeEach(() => {
    mockGet.mockResolvedValue({ data: { type: 'FeatureCollection', features: [] } });
  });

  it('has correct initial data', () => {
    const vm = mount(defineComponent({ ...HomePageTs, template: '<div />' })).vm as any;
    expect(vm.zoom).toBe(11.1);
    expect(vm.center).toEqual([-3.5, 116.36667]);
    expect(vm.isPeak).toBe(true);
    expect(vm.isCoastline).toBe(true);
    expect(vm.isLahanKritis).toBe(true);
  });

  it('loadStyle returns correct colors', () => {
    const vm = mount(defineComponent({ ...HomePageTs, template: '<div />' })).vm as any;
    expect(vm.loadStyle({ properties: { KRITIS: 'Agak Kritis' } })).toEqual({ color: '#D19A6F' });
    expect(vm.loadStyle({ properties: { KRITIS: 'Kritis' } })).toEqual({ color: '#FED699' });
    expect(vm.loadStyle({ properties: { KRITIS: 'Potensial Kritis' } })).toEqual({ color: '#A06332' });
    expect(vm.loadStyle({ properties: { KRITIS: 'Unknown' } })).toEqual({ color: '#FFFFFF' });
  });

  it('loads geojson data on created', async () => {
    mount(defineComponent({ ...HomePageTs, template: '<div />' }));
    await Promise.resolve();
    expect(mockGet).toHaveBeenCalledWith('/assets/sebuku-coastline.geojson');
    expect(mockGet).toHaveBeenCalledWith('/assets/sebuku-node-peak.geojson');
    expect(mockGet).toHaveBeenCalledWith('/assets/sebuku-lahan.geojson');
  });
});
