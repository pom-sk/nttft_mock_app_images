import { getImageUrl } from './config';

// モックデータ
export interface Location {
  id: string;
  name: string;
  address: string;
  image: string;
  deadline: string;
  status: '未点検' | '点検済' | '報告中';
  lastInspectionDate?: string;
  inspector?: string;
  prefecture: string;
  city: string;
  lat: number;
  lng: number;
}

export interface Building {
  id: string;
  name: string;
  image: string;
}

export interface Equipment {
  id: string;
  locationId: string;
  equipmentNo: string;
  name: string;
  majorCategory: string;
  mediumCategory: string;
  minorCategory: string;
  model: string;
  installDate: string;
  lastInspectionDate?: string;
  image: string;
  buildingId?: string;
}

export interface InspectionItem {
  id: string;
  equipmentId: string;
  itemNo: number;
  partCategory: string;
  itemName: string;
  status: '未完了' | '完了';
  rating?: number;
  photo?: string;
  previousPhoto?: string;
  previousPhotoDate?: string;
  notes?: string;
  ratingDescription: {
    [key: number]: string;
  };
}

export interface Notification {
  id: string;
  date: string;
  message: string;
}

// 拠点データ
export const locations: Location[] = [
  {
    id: '1',
    name: 'AAA浄化センター',
    address: '東京都XXX区YYY 1-2-3',
    image: getImageUrl('/images/locations/location_1.jpg'),
    deadline: '2026/03/31',
    status: '未点検',
    prefecture: '東京都',
    city: 'XXX区',
    lat: 35.6762,
    lng: 139.6503,
  },
  {
    id: '2',
    name: 'BBB浄化センター',
    address: '神奈川県ZZZ市AAA 4-5-6',
    image: getImageUrl('/images/locations/location_1.jpg'),
    deadline: '2026/04/15',
    status: '報告中',
    lastInspectionDate: '2026/03/05',
    inspector: '山田太郎',
    prefecture: '神奈川県',
    city: 'ZZZ市',
    lat: 35.4437,
    lng: 139.6380,
  },
];

// 建物データ
export const buildings: Building[] = [
  {
    id: '1',
    name: '0：管理棟本館',
    image: getImageUrl('/images/buildings/building_map_01_1.jpg'),
  },
  {
    id: '2',
    name: '1：水処理施設',
    image: getImageUrl('/images/buildings/building_map_01_1.jpg'),
  },
  {
    id: '3',
    name: '2：用水棟',
    image: getImageUrl('/images/buildings/building_map_01_1.jpg'),
  },
  {
    id: '4',
    name: '3：脱水機棟',
    image: getImageUrl('/images/buildings/building_map_01_1.jpg'),
  },
  {
    id: '5',
    name: '4：ボイラー棟',
    image: getImageUrl('/images/buildings/building_map_01_1.jpg'),
  },
  {
    id: '6',
    name: '5：汚泥濃縮槽',
    image: getImageUrl('/images/buildings/building_map_01_1.jpg'),
  },
  {
    id: '7',
    name: '6：汚泥消化槽',
    image: getImageUrl('/images/buildings/building_map_01_1.jpg'),
  },
  {
    id: '8',
    name: '7：沈砂池',
    image: getImageUrl('/images/buildings/building_map_01_1.jpg'),
  },
  {
    id: '9',
    name: '8：第3ポンプ棟',
    image: getImageUrl('/images/buildings/building_map_01_1.jpg'),
  },
];

// 装置データ
export const equipment: Equipment[] = [
  {
    id: '1',
    locationId: '1',
    equipmentNo: '270',
    name: '第2ポンプ施設分流No.1汚水ポンプ',
    majorCategory: '下水',
    mediumCategory: 'ポンプ設備',
    minorCategory: '渦巻ポンプ',
    model: 'XYZ-2000',
    installDate: '2020/04/01',
    lastInspectionDate: '2025/09/15',
    image: getImageUrl('/images/equipment/equipment_1.png'),
    buildingId: '2',
  },
  {
    id: '2',
    locationId: '1',
    equipmentNo: '294',
    name: '合流NO.1-1反応タンク撹拌機',
    majorCategory: '下水',
    mediumCategory: '反応タンク設備',
    minorCategory: '機械式散気装置（縦型）',
    model: 'XYZ-2000',
    installDate: '2020/04/01',
    image: getImageUrl('/images/equipment/equipment_1.png'),
    buildingId: '2',
  },
];

// 点検項目データ
export const inspectionItems: InspectionItem[] = [
  {
    id: '1',
    equipmentId: '1',
    itemNo: 1,
    partCategory: '全体',
    itemName: '絶縁抵抗値',
    status: '未完了',
    previousPhoto: getImageUrl('/images/inspections/inspection-previous-1.jpg'),
    previousPhotoDate: '2025/09/15',
    ratingDescription: {
      1: '100MΩ以上',
      2: '10MΩ以上',
      3: '1MΩ以上',
      4: '0.4MΩ以上',
      5: '0.4MΩ未満',
    },
  },
  {
    id: '2',
    equipmentId: '1',
    itemNo: 2,
    partCategory: '軸受',
    itemName: '変形、亀裂、損傷（軸受、チェーン、スプロケット）',
    status: '未完了',
    previousPhoto: getImageUrl('/images/inspections/inspection_1.png'),
    previousPhotoDate: '2025/09/15',
    ratingDescription: {
      1: '変形、破損なし',
      2: '',
      3: '',
      4: '',
      5: '変形、摩耗、割れがあり、運転ができない',
    },
  },
  {
    id: '3',
    equipmentId: '1',
    itemNo: 3,
    partCategory: 'メカニカルシール',
    itemName: 'オイル内の水分',
    status: '未完了',
    previousPhoto: getImageUrl('/images/inspections/inspection_2.png'),
    previousPhotoDate: '2025/09/15',
    ratingDescription: {
      1: '潤滑油が白濁していない',
      2: '',
      3: '',
      4: '',
      5: '潤滑油に著しく水分が含まれており、運転ができない',
    },
  },
];

// お知らせデータ
export const notifications: Notification[] = [
  {
    id: '1',
    date: '2026/03/01',
    message: '2026年度の点検スケジュールが登録されました',
  },
  {
    id: '2',
    date: '2026/02/15',
    message: 'アプリのバージョン2.0がリリースされました',
  },
];
