﻿namespace WebApi.Dtos
{
    public class Pagination<T> where T : class
    {
        public int Count { get; set; }
        public int PageSize { get; set; }
        public int PageIndex { get; set; }
        public IReadOnlyList<T> Data { get; set; }

        public int PageCount { get; set; }


    }
}
