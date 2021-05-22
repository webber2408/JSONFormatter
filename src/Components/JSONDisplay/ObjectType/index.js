import React, { useEffect, useState } from 'react';
import ArrayType from '../ArrayType';
import PrimitiveType from '../PrimitiveType';
import { ReactComponent as ExpandIcon } from '../../../assets/icons/expand.svg';
import { ReactComponent as ContractIcon } from '../../../assets/icons/contract.svg';

const ObjectType = ({ label = '', data = {}, triggerExpand = false }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(triggerExpand);
  }, [triggerExpand]);

  const toggleExpanded = () => setExpanded(!expanded);

  if (!Object.keys(data).length) return <></>;

  return (
    <>
      <span className='redText'>{`{`}</span>
      <ul>
        {Object.entries(data).map((item) => {
          const key = item[0],
            value = item[1];
          if (Array.isArray(value)) {
            return (
              <ArrayType
                label={key}
                data={value}
                triggerExpand={triggerExpand}
              />
            );
          }
          if (typeof value === 'object') {
            return (
              <>
                <li className='pinkText'>
                  "{key}" :{' '}
                  {expanded ? (
                    <ContractIcon onClick={toggleExpanded} />
                  ) : (
                    <ExpandIcon
                      onClick={toggleExpanded}
                      className='expandIcon'
                    />
                  )}{' '}
                  <span className='helperText'>[Object]</span>
                </li>
                {expanded && (
                  <ul>
                    <ObjectType
                      label={key}
                      data={value}
                      triggerExpand={triggerExpand}
                    />
                  </ul>
                )}
              </>
            );
          }
          return <PrimitiveType label={key} data={value} />;
        })}
      </ul>
      <span className='redText'>{`}`}</span>
    </>
  );
};

export default ObjectType;
