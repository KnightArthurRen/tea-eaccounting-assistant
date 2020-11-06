import { splitItemsAmongParticipants, TEST_ONLY } from './splitItemsAmongParticipants';

const { findSubsetCloseToValue } = TEST_ONLY;

describe('splitItemsAmongParticipants', () => {
  it('works', () => {
    const actual = splitItemsAmongParticipants([
      [
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '冷凝能量管理单元蓝图 III', price: 1999000 },
        { name: '维修增效器蓝图 I', price: 250 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反电磁聚合器蓝图 III', price: 8455000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '采矿器能效提升器蓝图 I', price: 3200000 },
        { name: '采矿器循环加速器蓝图 III', price: 149999999 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 II', price: 13000000 },
      ],
      [],
    ], ({ price }) => price);
    expect(actual).toEqual([
      [
        { name: '采矿器循环加速器蓝图 III', price: 149999999 },
      ],
      [
        { name: '无人机射速加强装置蓝图 II', price: 13000000 },
        { name: '反电磁聚合器蓝图 III', price: 8455000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '采矿器能效提升器蓝图 I', price: 3200000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '冷凝能量管理单元蓝图 III', price: 1999000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '维修增效器蓝图 I', price: 250 },
      ],
    ]);
  });

  it('works with outlier', () => {
    const actual = splitItemsAmongParticipants([
      [
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '冷凝能量管理单元蓝图 III', price: 1999000 },
        { name: '维修增效器蓝图 I', price: 250 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反电磁聚合器蓝图 III', price: 8455000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '采矿器能效提升器蓝图 I', price: 3200000 },
        { name: '采矿器循环加速器蓝图 III', price: 149999999 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 II', price: 13000000 },
      ],
      [],
      [],
      [],
      [],
      [],
    ], ({ price }) => price);
    expect(actual).toEqual([
      [{ name: '采矿器循环加速器蓝图 III', price: 149999999 }],
      [
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '采矿器能效提升器蓝图 I', price: 3200000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '冷凝能量管理单元蓝图 III', price: 1999000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
      ],
      [
        { name: '无人机射速加强装置蓝图 II', price: 13000000 },
        { name: '反电磁聚合器蓝图 III', price: 8455000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '维修增效器蓝图 I', price: 250 },
      ],
      [],
      [],
      [],
    ]);
  });

  it('works for K sets', () => {
    const actual = splitItemsAmongParticipants([
      [
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '冷凝能量管理单元蓝图 III', price: 1999000 },
        { name: '维修增效器蓝图 I', price: 250 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反电磁聚合器蓝图 III', price: 8455000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '采矿器能效提升器蓝图 I', price: 3200000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 II', price: 13000000 },
      ],
      [],
      [],
      [],
      [],
      [],
    ], ({ price }) => price);
    expect(actual).toEqual([[{ name: '无人机射速加强装置蓝图 II', price: 13000000 }],
      [
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '锁定系统辅助控制器蓝图 I', price: 2000000 },
        { name: '冷凝能量管理单元蓝图 III', price: 1999000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '采矿器距离控制器蓝图 I', price: 48000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
        { name: '维修增效器蓝图 I', price: 250 },
      ],
      [
        { name: '采矿器能效提升器蓝图 I', price: 3200000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
        { name: '反动能聚合器蓝图 II', price: 1000000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮范围扩大设备 II', price: 219000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
      ],
      [
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
      ],
      [
        { name: '反电磁聚合器蓝图 III', price: 8455000 },
        { name: '引力电容器升级蓝图 II', price: 2800000 },
      ],
      [
        { name: '反爆破聚合器蓝图 II', price: 6000000 },
        { name: '激光炮释放过滤器蓝图 II', price: 100000 },
        { name: '放射范围约束装置蓝图 I', price: 25000 },
        { name: '无人机射速加强装置蓝图 I', price: 9000 },
      ],
    ]);
  });

  it('works for a single group', () => {
    const itemGroups = [
      [
        { name: 'A', price: 1 },
        { name: 'A', price: 1 },
        { name: 'A', price: 1 },
        { name: 'B', price: 2 },
        { name: 'B', price: 2 },
        { name: 'B', price: 2 },
        { name: 'C', price: 3 },
        { name: 'C', price: 3 },
        { name: 'C', price: 3 },
      ],
    ];
    const actual = splitItemsAmongParticipants(itemGroups, ({ price }) => price);

    expect(actual).toEqual(itemGroups);
  });

  describe('findSubsetCloseToValue', () => {
    it('works for complex case', () => {
      const actual = findSubsetCloseToValue([1, 1, 2, 2, 3, 3], 6, x => x);
      expect(actual).toEqual(jasmine.arrayContaining([1, 1, 2, 2]));
    });

    it('works for simple case 1', () => {
      const actual = findSubsetCloseToValue([1, 1], 2, x => x);
      expect(actual).toEqual([1, 1]);
    });

    it('works for simple case 2', () => {
      const actual = findSubsetCloseToValue([2], 1, x => x);
      expect(actual).toEqual([2]);
    });

    it('works for empty set', () => {
      const actual = findSubsetCloseToValue([], 1, x => x);
      expect(actual).toEqual([]);
    });
  });
});
