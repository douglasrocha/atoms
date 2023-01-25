interface PagesMetadata {
  start: number;
  end: number;
  rangeSize: number;
  range: number[];
  isBackwardNavigationEnabled: boolean;
  isForwardNavigationEnabled: boolean;
  shouldShowEnds: boolean;
}

const getStartPage = (selectedPage: number, count: number) =>
  selectedPage - 2 >= 1 ? selectedPage - 2 : 1;

const getEndPage = (selectedPage: number, count: number) =>
  selectedPage + 2 <= count ? selectedPage + 2 : count;

const getRangeSize = (start: number, end: number) =>
  end - start + 1;

const getRange =(start: number, rangeSize: number): number[] =>
  [...Array(rangeSize).keys()].map(page => page + start + 1);

export default (selectedPage: number, 
                count: number, 
                isEndsNavigationEnabled: boolean): PagesMetadata => {
  const start = getStartPage(selectedPage, count);
  const end = getEndPage(selectedPage, count);
  const rangeSize = getRangeSize(start, end);
  const range = getRange(start, rangeSize);
  const isForwardNavigationEnabled = start !== 1;
  const isBackwardNavigationEnabled = end !== count;
  const shouldShowEnds = isEndsNavigationEnabled;

  return {
    start,
    end,
    rangeSize,
    range,
    isBackwardNavigationEnabled,
    isForwardNavigationEnabled,
    shouldShowEnds,
  }
};