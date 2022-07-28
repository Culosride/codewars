def rot13(string)
  chars = string.chars()
  new = chars.map do |char|
    if char.match?(/[a-zA-Z]/)
      if char.ord.between?(65, 76) || char.ord.between?(97, 109)
        char = (char.ord + 13).chr
      else
        char = (char.ord - 13).chr
      end
    else
      char
    end
  end
  new.join
end

# https://www.codewars.com/kata/530e15517bc88ac656000716
