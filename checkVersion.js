const fs = require('fs');
const packageJson = require('./package.json');

// 이전 버전과 현재 버전 비교
const previousVersion = fs.readFileSync('.previous_version', 'utf8');
const currentVersion = packageJson.version;

if (previousVersion === currentVersion) {
  console.error(
    '이전 버전과 현재 버전이 동일합니다. 버전을 변경한 후에 push 해주세요.'
  );
  process.exit(1);
}
