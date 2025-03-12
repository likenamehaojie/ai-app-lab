// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// Licensed under the 【火山方舟】原型应用软件自用许可协议
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at 
//     https://www.volcengine.com/docs/82379/1433703
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import styles from './index.module.less';

const Star = (props: { left: string; top: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    style={{ left: props.left, top: props.top, animationDelay: `${Math.random() * 2}s` }}
    className={styles.star}
  >
    <path
      d="M8.62564 0.812671C8.91912 0.190007 9.80415 0.190008 9.97376 0.812672L11.1782 5.23412C11.3037 5.6951 11.6328 6.05856 12.0791 6.22913L16.3597 7.86522C16.9625 8.09562 16.8749 8.97631 16.2262 9.20672L11.6202 10.8428C11.14 11.0134 10.7386 11.3768 10.5213 11.8378L8.43743 16.2593C8.14396 16.8819 7.25893 16.8819 7.08931 16.2593L5.88492 11.8378C5.75935 11.3768 5.43025 11.0134 4.98396 10.8428L0.70342 9.20672C0.100601 8.97631 0.188194 8.09562 0.836847 7.86522L5.44284 6.22913C5.92306 6.05856 6.32446 5.6951 6.54173 5.23412L8.62564 0.812671Z"
      fill="white"
    />
  </svg>
);

const starPositions = [
  [50, 20],
  [15, 35],
  [20, 50],
  [25, 65],
  [30, 80],
  [35, 25],
  [40, 40],
  [45, 55],
  [50, 70],
  [55, 85],
  [60, 30],
  [65, 45],
  [70, 60],
  [75, 75],
  [80, 20],
  [85, 35],
  [80, 50],
  [95, 65],
  [5, 80],
  [60, 30]
];

export const Stars = () => (
  <div className={styles.stars}>
    {starPositions.map((item, key) => (
      <Star key={key} left={`${item[0]}vw`} top={`${item[1]}vh`} />
    ))}
  </div>
);
