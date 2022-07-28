def solution(str)
  str = str + "_" if str.length.odd?
  str.scan(/.{1,2}/)
end

# https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
