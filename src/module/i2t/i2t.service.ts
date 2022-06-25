import { Injectable } from '@nestjs/common';
const fs = require('fs');
const tesseract = require('tesseract.js');
const path = require('path');
@Injectable()
export class I2TService {
  async convertImage2Text(filePath) {
    const image = await tesseract.recognize(filePath, {
      lang: 'eng',
    });
    const result = {
      text: image.text,
      confidence: image.confidence,
      totalWords: image.words.length,
      totalLines: image.lines.length,
      direction:image.words[0].direction,
    };

    fs.unlinkSync(filePath);
    return result;
  }

  async convertImage2TextV2(filePath) {
    const image = path.resolve(filePath);
    tesseract
      .detect(image, { logger: (m) => console.log(m) })
      .then(({ data }) => {
        console.log(data);
        return data;
      });
  }
}
